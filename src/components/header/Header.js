import React from 'react';

import './Header.css';
import globaTranslations from '../../translations/global.json';
import { withLocalize } from 'react-localize-redux';

const Header = (props) => {

    props.addTranslation(globaTranslations);

    const { translate } = props;

    return (
        <article>
            <header>
                <h1>WPR</h1>
                {/* <h1>{translate("global.header")}</h1> */}
                <div>
                    <span>M</span>
                    <span>E</span>
                    <span>R</span>
                    <span>N</span>
                </div>
            </header>
            <section id="quiz-name">
                {/* <h1>HTML Quiz</h1> */}
                <h1>{translate("global.quizName")}</h1>
            </section>
        </article>
    )
}

export default withLocalize(Header);