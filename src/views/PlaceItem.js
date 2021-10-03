import React, { useState, useContext } from 'react'
import '../css/PlaceItem.css';
import Card from '../components/Card';
import Button from './Button';
import Modal from '../components/Modal';
import Map from './Map';
import { AuthContext } from './auth-context';
import {useHttpClient} from '../views/http-hook';
import ErrorModal from './ErrorModal';
import LoadingSpinner from './LoadingSpinner';

const PlaceItem = props => {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const auth = useContext(AuthContext);
    const [showMap, setShowMap] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    const openMapHandler = () => setShowMap(true);

    const closeMapHandler = () => setShowMap(false);

    const showDeleteWarningHandler = () => {
        setShowConfirmModal(true);
    };

    const cancelDeleteHandler = () => {
        setShowConfirmModal(false);
    };

    const confirmDeleteHandler = async () => {
        setShowConfirmModal(false);
        try {
            await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/places/${props.id}`,
            'DELETE',
            null,
            {
                Authorization: `Bearer ${auth.token}`
            },
            );
            props.onDelete(props.id);
        } catch(err) {}
    };

    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError}/>
            <Modal
                show={showMap}
                onCancel={closeMapHandler}
                header={props.address}
                contentClass="place-item__modal-content"
                footerClass="place-item__modal-actions"
                footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
            >
                <div className="map-container">
                    <Map center={props.coordinates} zoom={16} />
                </div>
            </Modal>
            <Modal
                show={showConfirmModal}
                onCancel={cancelDeleteHandler}
                header="Are you sure?"
                footerClass="place-item__modal-actions"
                footer={
                    <React.Fragment>
                        <Button inverse onClick={cancelDeleteHandler}>
                            CANCEL
                        </Button>
                        <Button danger onClick={confirmDeleteHandler}>
                            DELETE
                        </Button>
                    </React.Fragment>
                }
            >
                <p>
                    Do you want to proceed and delete this place? Please note that it
                    can't be undone thereafter.
                </p>
            </Modal>
            <li className="place-item">
                <Card className="place-item__content">
                    {isLoading && <LoadingSpinner asOverlay />}
                    <div className="place-item__image">
                        <img src={`${process.env.REACT_APP_ASSET_URL}/${props.image}`} alt={props.title} />
                    </div>
                    <div className="place-item__info">
                        <h2>{props.title}</h2>
                        <h3>{props.address}</h3>
                        <p>{props.description}</p>
                    </div>
                    <div className="place-item__actions">
                        <Button inverse onClick={openMapHandler}>
                            VIEW ON MAP
                        </Button>
                        {console.log(props.userId)}
                        {auth.userId === props.creatorId &&
                            <React.Fragment>
                                <Button to={`/places/${props.id}`}>EDIT</Button>
                                <Button danger onClick={showDeleteWarningHandler}>DELETE</Button>
                            </React.Fragment>
                        }
                    </div>
                </Card>
            </li>
        </React.Fragment>
    );
};

export default PlaceItem;