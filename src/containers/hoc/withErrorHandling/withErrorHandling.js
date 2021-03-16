import React, {Component} from 'react';
import Aux from '../Aux/Aux';
import Modal from '../../../components/UI/Modal/Modal';


const withErrorHandling = (WrappedComponent, httpHelper) => {
    
    return class extends Component {

        
        state = {
            error: null
        }

        UNSAFE_componentWillMount() {
          
           

           this.reqInterceptor = httpHelper.interceptors.request.use(req => {
               
                this.setState({error: null});
                return req;
            });

           this.resInterceoptor =  httpHelper.interceptors.response.use(res => res, error => {
                
                    this.setState({
                        error:error
                    });
                    return error;
                });
        }

        componentWillUnmount() {
            httpHelper.interceptors.request.eject(this.reqInterceptor);
            httpHelper.interceptors.response.eject(this.resInterceoptor);
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