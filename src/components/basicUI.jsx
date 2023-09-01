import { React, useState } from "react";
import { Dropdown, Container, Navbar, Button, Nav as NavB } from "react-bootstrap";
import useTheme from "../hooks/useTheme";

export function Nav({ t, changeLanguage }) {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="/">
                    <img src="/images/favicon_org.ico" alt="Logo" width="100" height="72" className="d-inline-block align-text-middle" />
                    <span>{t("titleLong")}</span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <NavB>
                        <NavB.Link href="#about">{t("about.link")}</NavB.Link>
                        <NavB.Link href="#who">{t("who.link")}</NavB.Link>
                        <NavB.Link href="#projects">{t("projects.link")}</NavB.Link>
                    </NavB>
                    <LanguageSelector t={t} changeLanguage={changeLanguage} />
                    <ThemeSelector t={t} />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

function LanguageSelector({ t, changeLanguage }) {
    const [state, setState] = useState(" " + t("chooseLang"));

    const changeLanguageHelper = (lang) => {
        changeLanguage(lang);
        setState(" " + lang.toUpperCase());
    }

    return (
        <Dropdown className="ms-auto">
            <Dropdown.Toggle variant="secondary" className="rounded-pill m-1">
                <i className="bi bi-globe-americas"></i>
                <span>{state}</span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={() => changeLanguageHelper("ca")}>Valencià/Català</Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguageHelper("es")}>Castellano</Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguageHelper("en")}>English</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

function ThemeSelector({ t }) {
    const [getTheme, setTheme] = useTheme();

    return (
        <Dropdown>
            <Dropdown.Toggle variant="secondary" className="rounded-pill">
                <i className={getTheme()[0]}></i>
                <span>{t(getTheme()[1])}</span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-lg-end">
                <Dropdown.Item onClick={() => setTheme("light")}>
                    <i className="bi bi-sun-fill">{t("themeSelector.light")}</i>
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setTheme("dark")}>
                    <i className="bi bi-moon-stars-fill">{t("themeSelector.dark")}</i>
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setTheme("auto")}>
                    <i className="bi bi-circle-half">{t("themeSelector.auto")}</i>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export function Footer({ t }) {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top fixed-bottom bg-body-tertiary">
            <p className="col-md-4 mb-1 ms-2 text-body-secondary">{t("orgName")}</p>

            <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none me-3">
                <img src="/images/favicon_org.ico" alt="Logo" width="30" height="24" className="align-text-top" />
            </a>
        </footer>
    );
}