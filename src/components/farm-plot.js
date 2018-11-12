import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import STORE from '../stores/store';
import { IDLABLES } from '../stores/idlables';
import { timeFormatter } from '../utilities/formatting';

const FarmPlot = observer(class FarmPlot extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind( this );
    }

    static displayName = 'FarmPlot';

    static propTypes = {
        slotNum: PropTypes.number.isRequired
    };

    onClick() {
        let { slotNum } = this.props;
        if (this.isSelected) slotNum = -1;

        STORE.locations['farm'].selectedSlot = slotNum;
    }

    get isSelected() {
        const { slotNum } = this.props;
        const { locations: { farm: { selectedSlot } } } = STORE;
        return slotNum === selectedSlot;
    }

    get idler() {
        const { slotNum } = this.props;
        return STORE.idling.find(idler => idler.location === 'farm' && idler.slot === slotNum);
    }

    render() {
        const { idler } = this;
        const [ remaining, idleable ] = idler
            ? [ idler.stop - idler.current, IDLABLES.find(i => i.id === idler.itemId) ]
            : [ 0, null ];
        return (
            <div className={`farm-plot ${this.isSelected ? 'selected' : ''}`} style={{backgroundColor: 'white'}} onClick={this.onClick}>
                {
                    idler
                    ? (<React.Fragment>
                        <span className="item-name">
                            { idleable.name }
                        </span>
                        <span className="time-left">
                            { remaining < 0 ? 0 : timeFormatter(remaining, 'ms') }
                        </span>
                        { remaining <= 0 &&
                            <span className="collect">
                                Collect
                            </span>
                        }
                    </React.Fragment>)
                    : 'CLICK'
                }
            </div>
        );
    }
});

export default FarmPlot;
