import React from "react";

const Social = () =>{

    const openURL = (url) =>{
        chrome.tabs.create({ url: url });
    }

    return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <section>
        <a className="btn btn-link btn-floating btn-sm text-dark m-0"  onClick={()=>{openURL("https://www.codingkaro.in")}} role="button" data-mdb-ripple-color="dark" style={{ marginRight: '10px', fontSize: '18px', cursor: 'pointer' }}><i className="fa-solid fa-link"></i></a>
        <a className="btn btn-link btn-floating btn-sm text-dark m-0"  onClick={()=>{openURL("https://play.google.com/store/apps/developer?id=Shypt+Solution")}} role="button" data-mdb-ripple-color="dark" style={{ marginRight: '10px', fontSize: '18px', cursor: 'pointer' }}><i className="fa-brands fa-google-play"/></a>

        <a className="btn btn-link btn-floating btn-sm text-dark m-0" onClick={()=>{openURL("https://twitter.com/iraunit")}} role="button" data-mdb-ripple-color="dark" style={{ marginRight: '10px', fontSize: '18px', cursor: 'pointer' }}><i className="fab fa-twitter"></i></a>

        <a className="btn btn-link btn-floating btn-sm text-dark m-0" onClick={()=>{openURL("https://www.instagram.com/codingkaro.in/")}} role="button" data-mdb-ripple-color="dark" style={{ marginRight: '10px', fontSize: '18px', cursor: 'pointer' }}><i
                className="fab fa-instagram"></i></a>

        <a className="btn btn-link btn-floating btn-sm text-dark m-0"  onClick={()=>{openURL("https://www.linkedin.com/in/iraunit/")}} role="button" data-mdb-ripple-color="dark" style={{ marginRight: '10px', fontSize: '18px', cursor: 'pointer' }}><i className="fab fa-linkedin"></i></a>
      
        <a className="btn btn-link btn-floating btn-sm text-dark m-0" onClick={()=>{openURL("https://github.com/iraunit/")}} role="button" data-mdb-ripple-color="dark" style={{ fontSize: '18px', cursor: 'pointer' }}><i className="fab fa-github"></i></a>

    </section>
</div>)
}

export default Social;