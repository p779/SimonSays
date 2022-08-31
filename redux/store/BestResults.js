import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { isFilesHandlerFile } from '../../consts/parent/regex';
import { addToBoardEnum } from '../../types/enums/generalEnums';
import { pinStatus } from '../../types/enums/pinStatusEnum';
import { PinTypescript, RecTypescript, SubBoard } from '../../types/interfaces/generalInterfaces';
import { setStatusOfPin } from '../../utils/Functions';
import { initialStateBestResults } from '../Const';
import { addEditSubBoard } from './asyncThunks/subBoardSliceThunks';

export const bestResultsSlice = createSlice({
    name: 'bestResult',
    initialState: initialStateBestResults,
    reducers: {
        addNewResult(state, action) {
            for(let i = 0; i < state.bestTenRresults.length; i++){
                if(state.bestTenRresults[i].score < action.score){
                    //add the new best score
                    state.bestTenRresults.splice(i, 0, action);
                }
            }
            if(state.bestTenRresults.length > 10){
                state.bestTenRresults.splice(10, 1)
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(addEditSubBoard.fulfilled, (state, action) => {
            state.id = action.payload.id
        })
    }
})
export const bestResults = bestResults.actions