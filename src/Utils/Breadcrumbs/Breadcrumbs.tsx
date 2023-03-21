import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Breadcrumbs = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const pathnames = pathname.split("/").filter(Boolean);

    return (

        <Breadcrumb aria-label="breadcrumb">
            {pathnames.length ? (
                <Breadcrumb.Item linkAs={Link} onClick={() => navigate("/")}>Home</Breadcrumb.Item>
            ) : (
                <Breadcrumb.Item active> Home </Breadcrumb.Item>
            )}
            {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                const isLast = index === pathnames.length - 1;
                return isLast ? (
                    <Breadcrumb.Item active key={name}>{name}</Breadcrumb.Item>
                ) : (
                    <Breadcrumb.Item linkAs={Link} key={name} onClick={() => navigate(routeTo)}>
                        {name}
                    </Breadcrumb.Item>
                );
            })}
        </Breadcrumb>
    );
};
export default Breadcrumbs;