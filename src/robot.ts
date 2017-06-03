import { ISminuzzatore } from './sminuzzatore';

export class Robot
    implements ISminuzzatore {

    sminuzza() {
        return 'sminuzzato';
    }

}