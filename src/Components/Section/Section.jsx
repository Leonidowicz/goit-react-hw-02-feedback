import { Component } from "react"

class Section extends Component {

    render({ title, children } = this.props) {
        return <>
            <p>{title}</p>
            {children }
               </>
    }
}

export default Section