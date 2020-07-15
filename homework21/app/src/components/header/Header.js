import React from 'react';
import { titleSlogans } from '../../globals';
import { titleChoose } from '../../utils'
import { Title } from '../../components';

import './Header.css';

function Header() {

    return (
        <header className="header-wrapper">
            <Title className="header-title" text={(
                <>
                    <span>todo</span><span style={{ fontWeight: 900 }}>LIST</span>
                </>
            )} />

            <Title
                className="slogan-title"
                text={titleSlogans.length === 0 ? "Your MOTTO could be here." :
                    titleChoose(titleSlogans)}
            />
        </header>
    )
}

export default Header;
