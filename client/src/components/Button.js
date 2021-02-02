import React from 'react';
import Button from '@material-ui/core/Button';

const IconLabeledButton = (variant, color, icon) => {
    return <Button variant={variant} color={color} endIcon={icon}></Button>
}

export default IconLabeledButton;