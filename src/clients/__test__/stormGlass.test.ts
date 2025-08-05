import {StormGlass} from '@src/clients/stormGlass';

describe('StormGlass client', () =>{
    it('should reeturn the normalized forecast from the StormGlass service', async () =>{
        const lat = -154.54;
        const lng = 45.75;

        const stormGlass = new StormGlass();
        const response = await stormGlass.fetchPoints(lat, lng);
        expect(response).toEqual({});
    })
})