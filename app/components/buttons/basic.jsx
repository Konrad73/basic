//BasicButton


import icons from 'shared/icons.scss';
import styles from 'components/buttons/basic.scss';

import React, { Component } from 'react';

export default class Basic extends Component {

    render() {

        let className;
        if (this.props.type == 'primary') { className = styles.primary }
        else if (this.props.type == 'alternate') { className = styles.alternate }
        else if (this.props.type == 'warning') { className = styles.warning }
        else if (this.props.type == 'error') { className = styles.error }
        else if (this.props.type == 'delete') { className = styles.delete }
        else if (this.props.type == 'link') { className = styles.link }
        else if (this.props.type == 'link_delete') { className = styles.link_delete }
        else className = styles.normal;

        let sizeProp;
        if (this.props.size == 'smallest') { sizeProp = styles.smallest }
        if (this.props.size == 'small') { sizeProp = styles.small }
        if (this.props.size == 'large') { sizeProp = styles.large }
        if (this.props.size == 'largest') { sizeProp = styles.largest }

        let iconPos;
        if (Boolean(this.props.iconPos)) {iconPos = styles.iconRight}

        let iconOnly;
        if (Boolean(!this.props.children)) {iconOnly = styles.iconOnly}

        let iconTag, icon;
        icon = this.props.icon;
        if (Boolean(this.props.icon)) {iconTag = <icon className={styles.icon + ' ' + icons[icon] + ' ' + iconPos + ' ' + iconOnly}></icon>}


        return (   this.props.disabled?
                <button className={className + ' ' + sizeProp} disabled>{iconTag}{this.props.children}</button> :
                <button className={className + ' ' + sizeProp}>{iconTag}{this.props.children}</button>
        );
    }

};