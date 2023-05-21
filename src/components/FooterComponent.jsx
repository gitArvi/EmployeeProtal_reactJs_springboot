import React, { Component } from 'react'

 class FooterComponent extends Component {
    constructor()
    {
        super();
        this.state=
        {

        }
    }
  render() {
    return (
      <div>
        
<footer className="footer">
  <p>Author: Hege Refsnes<br/>
  <a href="mailto:hege@example.com">hege@example.com</a></p>
</footer>
      </div>
    )
  }
}


export default FooterComponent;