import { useHistory } from 'react-router-dom';

function EditClassPage(){
     //------------<  Setup  >-------------
     const history = useHistory();

     //---------------<  C l i c k   H a n d l e r s  >----------------------------
    const handleReturnClick = () => {
        history.goBack();
    }
    const handleSubmit = () => {
    }

    return(
        <>
            <button onClick={handleReturnClick}>Return</button>
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}
export default EditClassPage;