import React from "react";

export default class MechanicalService extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const customStyles = {
            content: {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
              padding: 0,
              borderRadius: 5,
              borderColor: "#1f40e6",
              // width: "75%",
            },
        };

        return (
            <div className="ServiceContainer">
                <div className="ServiceTitleContainer">
                    <p>{this.props.service.position}</p>
                    <p className="ServiceTittleStyle">{this.props.service.title}</p>
                </div>
                <input className="SiteInput" placeholder="Enter price" />
            </div>
        );
    }
}