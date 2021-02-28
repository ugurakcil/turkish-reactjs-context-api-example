import React, { Component } from 'react'
import { CirkinOrdekTuketici } from './baglam'

export default class CirkinOrdekBelirleyici extends Component {
    render() {
        return (
            <CirkinOrdekTuketici>
                {({ordekmi, cirkinmi, tersine, dispatch}) => {
                    return(<div>
                        <h2>Çirkin Ördek Belirleyici</h2>
                        <div>Ördek mi? : { ordekmi ? 'vırak' : 'cik cik'}</div>
                        <div>Çirkin mi? : { cirkinmi ? 'vırak' : 'cik cik'}</div>
                        <br />
                        <button onClick={tersine}>
                            Tersine Çevir
                        </button>
                    </div>)
                }}
            </CirkinOrdekTuketici>
        )
    }
}
