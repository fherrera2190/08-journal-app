import { startNewNote } from "../../../src/store/journal/thunks"

/* eslint-disable no-undef */
describe('Pruebas en Journal Thunks', () => { 

    const distpatch = jest.fn()
    const getState = jest.fn()
    beforeEach(() => jest.clearAllMocks())

    test('startNewNote debe de crear una nueva nota',async () => { 
        
        getState.mockReturnValue({
            auth: {
                uid: 'TEST-UID'
            }
        })

        await startNewNote()(distpatch, getState)
     })
 })