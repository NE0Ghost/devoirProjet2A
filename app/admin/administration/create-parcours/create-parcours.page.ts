import { Component, OnInit } from '@angular/core';
import { Point, Parcours, DataService } from 'src/app/services/data.service';
import { LoadingController, NavController, ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ListPointsComponent } from 'src/app/list-points/list-points.component';

@Component({
    selector: 'app-create-parcours',
    templateUrl: './create-parcours.page.html',
    styleUrls: ['./create-parcours.page.scss'],
})
export class CreateParcoursPage implements OnInit {

    points: Point[];
    parcours: Parcours;

    constructor(
        private serv: DataService,
        private route: ActivatedRoute,
        private router: Router,
        private nav: NavController,
        private loadingController: LoadingController,
        public modalController: ModalController) { }

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        // this.serv.getPoints().subscribe(res => {
        //     this.points = res;
        // });
        if (id) {
            this.parcours = this.serv.getSingleParcours(id);
        } else {
            this.parcours = {
                description: '',
                pis: [],
                title: ''
            };
        }
    }

    addParcours() {
        this.serv.addParcours(this.parcours).then(() => {
            this.router.navigateByUrl('/administration');
        }, err => {
            console.log('Error creation parcours');
        });
    }

    deleteParcours() {
        this.serv.removeParcours(this.parcours.id).then(() => {
            this.router.navigateByUrl('/administration');
        }, err => {
            console.log('Error delete parcours');
        });
    }

    updateParcours() {
        this.serv.updateParcours(this.parcours).then(() => {
            this.router.navigateByUrl('/administration');
        }, err => {
            console.log('Error update parcours');
        });
    }

    async showPointList() {
        const modal = await this.modalController.create({
            component: ListPointsComponent
        });
        await modal.present();
        modal.onDidDismiss().then(event => {
            this.parcours.pis.push({point: event.data, ordre: this.parcours.pis.length + 1});
        });
    }

    async saveParcours(parcours) {
        const loading = await this.loadingController.create({
            message: 'Saving parcours...',
            duration: 1000
        });

        await loading.present();

        if (parcours.id) {
            this.serv.updateParcours(this.parcours).then(() => {
                loading.dismiss();
                this.nav.navigateBack('administration');
            });
        } else {
            this.serv.addParcours(this.parcours).then(() => {
                loading.dismiss();
                this.nav.navigateBack('administration');
            });
        }
    }
}
