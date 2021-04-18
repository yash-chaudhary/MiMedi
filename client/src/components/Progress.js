import React from "react";


// Styles credit: https://dev.to/ramonak/react-how-to-create-a-custom-progress-bar-component-in-5-minutes-2lcl

const ProgressBar = (props) => {
    const { bgcolor, completed } = props;

    const containerStyles = {
      height: 20,
      width: '30%',
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      marginLeft: '35%',
      marginBottom:'-0.7%',
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right',
      transition: 'width 1s ease-in-out',
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;