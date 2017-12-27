import React from 'react';

class InlineStyles extends React.Component {

    constructor(props) {
        super(props);
    }

    colors = () =>
    {
        return {
            names:{
                aqua: "#00ffff",
                azure: "#f0ffff",
                beige: "#f5f5dc",
                black: "#000000",
                blue: "#0000ff",
                brown: "#a52a2a",
                cyan: "#00ffff",
                darkblue: "#00008b",
                darkcyan: "#008b8b",
                darkgrey: "#a9a9a9",
                darkgreen: "#006400",
                darkkhaki: "#bdb76b",
                darkmagenta: "#8b008b",
                darkolivegreen: "#556b2f",
                darkorange: "#ff8c00",
                darkorchid: "#9932cc",
                darkred: "#8b0000",
                darksalmon: "#e9967a",
                darkviolet: "#9400d3",
                fuchsia: "#ff00ff",
                gold: "#ffd700",
                green: "#008000",
                indigo: "#4b0082",
                khaki: "#f0e68c",
                lightblue: "#add8e6",
                lightcyan: "#e0ffff",
                lightgreen: "#90ee90",
                lightgrey: "#d3d3d3",
                lightpink: "#ffb6c1",
                lightyellow: "#ffffe0",
                lime: "#00ff00",
                magenta: "#ff00ff",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                orange: "#ffa500",
                pink: "#ffc0cb",
                purple: "#800080",
                violet: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                white: "#ffffff",
                yellow: "#ffff00"
            },
            random:function() {
                var result;
                var count = 0;
                for (var prop in this.names)
                    if (Math.random() < 1/++count)
                       result = prop;
                return result;
            }
        }
    }    
   
    getStyles = () => {
        return {
            heading: {
                color: "#232323",
            }
        }
    }

    buttonClick = () => {
        this.header.style.color = this.colors().random();
    }        

    render() {
        return (
            <div>
                <h3 ref={(item) => { this.header = item }} style={{ color: this.getStyles().heading.color }}>Inline styles</h3>
                <button style={{ color: '#f44336' }} onClick={this.buttonClick}>
                    Click to change heading color
                </button>
            </div>
        );
    }

}

export default InlineStyles;