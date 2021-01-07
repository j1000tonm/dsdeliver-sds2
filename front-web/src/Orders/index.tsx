import './styles.css';
import StepsHeader from './StepsHeader';

function Orders() {
    return (
        <div className="orders-container">
            <StepsHeader />
            <ul className="steps-items">
                <li>
                    <span className="steps-number">1</span>
                    Selecione os produtos e localização
                </li>
                <li>
                    <span className="steps-number">2</span>
                    Depois click em <strong>"ENVIAR PEDIDO"</strong>
                </li>
            </ul>
        </div>
    )
}

export default Orders;