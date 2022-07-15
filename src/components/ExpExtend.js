import React from 'react'
import '../App.css';

const Exp_Extend = ( props ) => {
    var descr = ""
    if ( props.desc != null ) {
        descr = <p className='exp_desc'>
            {props.desc}
        </p>
    }
    var achieve = ""
    if ( props.ach != null ) {
        achieve = <ul className='work_li exp_desc'>
            {props.ach.map( ( item, index ) => {
                return <li>{item}</li>;
            } )}
        </ul>
    }

    return (
        <span className='exp_extend'>
            {descr}
            {achieve}
            <span className='exp_cert_container'>

                {props.certArray.map( ( item, index ) => {
                    const certLink = `../images/certHD/${item}`;
                    const cert = {
                        backgroundImage: `url(../images/cert/${item})`,
                        backgroundColor: 'white'
                    };
                    return (
                        <a key={index} target='_blank' rel='noreferrer' href={certLink}>
                            {item.loc}
                            <div className='exp_cert' >
                                <div style={cert}>

                                </div>
                                <p className="cert_desc">{props.certDescs[index]}</p>
                            </div>
                        </a>
                    );
                } )}
            </span>
        </span>
    )
}

export default Exp_Extend