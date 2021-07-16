import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import React from 'react';

import AddCardAbstractForm from './AddCardAbstractForm.jsx';
import '../styles/DropdownLiveSearch.css';

function AddCard() {

    let langs = [{ lang: "Dutch", index: 1 }, { lang: "Norwegian", index: 2 }];

    const [input, setInput] = useState("");
    const [langSelected, setLangSelected] = useState("");
    const [grammarSelected, setGrammarSelected] = useState("");

    const handleLangSelect = (indexSelected) => {
        setLangSelected(langs[indexSelected - 1].lang);
    }

    const handleGrammarSelect = (grammar) => {
        setGrammarSelected(grammar);
    }

    if (input.length > 0) {
        langs = langs.filter((lang) => {
            return lang.lang.match(input);
        })
    }

    let options;
    if (langs.length === 0) {
        options = <Dropdown.Item disabled>No matches</Dropdown.Item>;
    } else {
        options = langs.map((lang) => <Dropdown.Item key={lang.index} onClick={() => handleLangSelect(lang.index)} eventKey={lang.index}>{lang.lang}</Dropdown.Item>);
    }

    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <Button href="" ref={ref} onClick={(e) => { e.preventDefault(); onClick(e); }}>
            {children}
            &#x25bc;
        </Button>
    ));

    const CustomMenu = React.forwardRef(
        ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {

            return (
                <div ref={ref} style={style} className={className} aria-labelledby={labeledBy}>
                    <FormControl
                        autoFocus
                        className="mx-3 my-2 w-auto"
                        placeholder="Search..."
                        onChange={(e) => setInput(e.target.value)}
                        value={input} />
                    <ul className="list-unstyled">
                        {children}
                    </ul>
                </div>
            );
        },
    );

    return (
        <Container fluid>
            <Row>
                <Col>
                </Col>
                <Col xs={10}>
                    <InputGroup>
                        <Dropdown>
                            <Dropdown.Toggle as={CustomToggle} id="dropdownLanguageToggle">
                                {langSelected === '' ? "Select language" : langSelected}
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdownTransform" as={CustomMenu}>
                                {options}
                            </Dropdown.Menu>
                        </Dropdown>
                    </InputGroup>
                    <InputGroup>
                        <Dropdown>
                            <Dropdown.Toggle>
                                {grammarSelected === '' ? "Part of speech" : grammarSelected}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => handleGrammarSelect("Adjective")}>Adjective</Dropdown.Item>
                                <Dropdown.Item onClick={() => handleGrammarSelect("Noun")}>Noun</Dropdown.Item>
                                <Dropdown.Item onClick={() => handleGrammarSelect("Verb")}>Verb</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </InputGroup>
                </Col>
                <Col>
                </Col>
            </Row>
            <Row>
                <AddCardAbstractForm langSelected={langSelected} grammarSelected={grammarSelected}/>
            </Row>
        </Container >
    )
}

export default AddCard;