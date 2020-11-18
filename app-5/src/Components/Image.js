import React, {Component} from "react";

export default class Image extends Component {
    
    render () {
        return (
            <div className="image-holder">
                <img 
                    className="site-image"
                    src={this.props.url}
                />
            </div>
        )
    }
}