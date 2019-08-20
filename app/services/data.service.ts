import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

export interface Point {
    id?: string;
    title: string;
    description: string;
}

export interface Parcours {
    id?: string;
    title: string;
    description: string;
    pis: Pis[];
}

export interface Pis {
    ordre: number;
    point: Point;
}


@Injectable({
    providedIn: 'root'
})

export class DataService {

    private parcoursCollection: AngularFirestoreCollection<Parcours>;
    private pointCollection: AngularFirestoreCollection<Point>;

    private points: BehaviorSubject<Point[]> = new BehaviorSubject<Point[]>([]);
    private parcours: BehaviorSubject<Parcours[]> = new BehaviorSubject<Parcours[]>([]);

    constructor(private afs: AngularFirestore) {
        this.pointCollection = afs.collection<Point>('points');
        this.parcoursCollection = afs.collection<Parcours>('parcours');

        this.pointCollection.valueChanges({ idField: 'id' }).subscribe(points => {
            console.log(points);
            this.points.next(points);
        });

        this.parcoursCollection.valueChanges({ idField: 'id' }).subscribe(parcours => {
            console.log(parcours);
            this.parcours.next(parcours);
        });
    }

    getPoints(): BehaviorSubject<Point[]> {
        return this.points;
    }

    getPoint(id: string): Point {
        return this.points.value.find(p => p.id === id);
    }

    updatePoint(point: Point): Promise<void> {
        return this.pointCollection.doc(point.id).update({ title: point.title, description: point.description });
    }

    addPoint(point: Point): Promise<firebase.firestore.DocumentReference> {
        return this.pointCollection.add(point);
    }

    removePoint(id: string): Promise<void> {
        return this.pointCollection.doc(id).delete();
    }

    getParcours() {
        return this.parcours;
    }

    getSingleParcours(id: string) {
        return this.parcours.value.find(p => p.id === id);
    }

    updateParcours(parcours: Parcours) {
        return this.parcoursCollection.doc(parcours.id).update(parcours);
    }

    addParcours(parcours: Parcours) {
        return this.parcoursCollection.add(parcours);
    }

    removeParcours(id) {
        return this.parcoursCollection.doc(id).delete();
    }
}
