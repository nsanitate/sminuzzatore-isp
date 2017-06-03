import { IAiutante } from './aiutante';

export class Robot
    implements IAiutante {

    sminuzza() {
        return 'sminuzzato';
    }

    pulisci() {
        return 'io non so pulure';
    }

}