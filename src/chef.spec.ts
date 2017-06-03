import { expect } from 'chai';

import { Chef } from './chef';
import { Sguattero } from './sguattero';
import { Robot } from './robot';

describe('Chef', () => {

    let chef: Chef;

    beforeEach(() => {
        // Arrange
        chef = new Chef();
    });

    it('dovrebbe far sminuzzare ad uno sguattero', () => {
        // Arrange
        const sguattero = new Sguattero();

        // Act
        const actual = chef.faiSminuzzare(sguattero);

        // Assert
        expect(actual).to.equal('sminuzzato');
    });

    it('dovrebbe far sminuzzare ad un robot', () => {
        // Arrange
        const robot = new Robot();

        // Act
        const actual = chef.faiSminuzzare(robot);

        // Assert
        expect(actual).to.equal('sminuzzato');
    });

});