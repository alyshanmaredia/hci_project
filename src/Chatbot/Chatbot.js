import React, {Component} from 'react';
import './Chatbot.css'
class KommunicateChat extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        (function(d, m){
            
                    var kommunicateSettings = {"appId":"31e3ad6a5ad4710d956559b8cf7b99f26","popupWidget":true,"automaticChatOpenOnNavigation":true};
            
                    var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            
                    s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            
                    var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            
                    window.kommunicate = m; m._globals = kommunicateSettings;
            
                  })(document, window.kommunicate || {});
    }
    render(){
        return(
          <div className="box">
            <div className="text">
            Google DialogFlow ChatBot 
            </div>
          </div>
        )
    }

}

export default KommunicateChat;