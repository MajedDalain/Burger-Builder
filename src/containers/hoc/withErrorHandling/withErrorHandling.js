import React, {Component} from 'react';
import Aux from '../Aux/Aux';
import Modal from '../../../components/UI/Modal/Modal';


const withErrorHandling = (WrappedComponent, httpHelper) => {
    
    return class extends Component {

        componentDidMount() {
            console.log("did mount in hoc");

            httpHelper.interceptors.request.use(req => {
                console.log("request interceptor is called");
                console.log("request",req);
                this.setState({error: null});
                return req;
            });

            httpHelper.interceptors.response.use(res => res, error => {
                console.log("inside the error");
                    this.setState({
                        error:error
                    });
                    return error;
                });
        }

        state = {
            error: null
        }

      

        render() {
            return(
                <Aux>
                     <Modal showModal={this.state.error ? true : false}
                            handleClick={() => this.setState({error:null})}
                            >
                         {this.state.error ? this.state.error.message : null}
                     </Modal>
                     <WrappedComponent {...this.props}></WrappedComponent>
                </Aux>
                )
        }
    }

}

export default withErrorHandling;