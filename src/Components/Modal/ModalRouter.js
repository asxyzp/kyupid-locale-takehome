// IMPORTING PACKAGES/MODULES
import React from 'react';
import Splash from './Splash';
import { useAppContext } from '../../Context/AppContext';

/**
 * @name ModalRouter
 * @description MODAL ROUTER COMPONENT
 * @param {*} props COMPONENT PROPS
 * @returns <ModalRouter />
 */
const ModalRouter = (props) => {

    // GETTING CONTEXT VALUES
    const { modalType } = useAppContext();

    // RETURNING MODAL COMPONENT BASED ON MODAL TYPE
    if (modalType === 'splash')
        return (<Splash />);
    else
        return (<></>);
};

export default ModalRouter;