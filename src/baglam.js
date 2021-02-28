import React, { Component } from 'react'

const Baglam = React.createContext()

export const ActionTypes = {
    TERSINE_ORDEK: "TERSINE_ORDEK",
    TERSINE_CIRKIN_ORDEK: "TERSINE_CIRKIN_ORDEK"
}

const reducer = (state, action) => {
    if(action.type === ActionTypes.TERSINE_ORDEK){
        return { ...state, ordekmi: !state.ordekmi }
    } else if(action.type === ActionTypes.TERSINE_CIRKIN_ORDEK){
        return { ...state, ordekmi: !state.ordekmi, cirkinmi: !state.cirkinmi }
    } else {
        return state
    }
}

export class OrdekSaglayici extends Component {
    state = { 
        ordekmi: false,
        dispatch: action => {
            this.setState(state => reducer(state, action))
        },
        tersine: () => this.state.dispatch({type: "TERSINE_ORDEK"})
    }

    render() {
        const { state, props: { children } } = this

        return (
            <Baglam.Provider value={state}>
                {children}
            </Baglam.Provider>
        )
    }
}

export class CirkinOrdekSaglayici extends Component {
    state = { 
        ordekmi: false,
        cirkinmi: false,
        dispatch: action => {
            this.setState(state => reducer(state, action))
        },
        tersine: () => this.state.dispatch({type: "TERSINE_CIRKIN_ORDEK"})
    }

    render() {
        const { state, props : { children } } = this

        return (
            <Baglam.Provider value={state}>
                {children}
            </Baglam.Provider>
        )
    }
}

export const OrdekTuketici = Baglam.Consumer
export const CirkinOrdekTuketici = Baglam.Consumer