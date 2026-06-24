const { syncDB } = require("../../tasks/sync-db");

describe('Pruebas en Sync-DB', () => {
    test('Debe de ejecutar el proceso 2 veces', () => {

         syncDB();
        let times = syncDB();
        console.log('se llamo ', times)

        expect(times).toBe(2);
    })
})
