import React from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = ({ date }) => {

    const noteDate = moment(date);
    const dispatch = useDispatch();
    const { active } = useSelector( state => state.notes );

    const handleSave = () => {
        dispatch( startSaveNote( active ) );
    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }
    
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if ( file ) {
            dispatch( startUploading( file ) );
        }
    }

    return (
        <div className="notes__appbar">
            <span>Today { noteDate.format('MMM Do YYYY') } </span>

            <input 
                id="fileSelector"
                type="file"
                name="file"
                style={{ display: 'none' }}
                onChange={ handleFileChange }
            />

            <div>
                <button 
                    className="btn"
                    onClick={ handlePictureClick }
                ><i class="fa fa-camera-retro fa-lg"></i>
                Picture   
                </button>

                <button 
                    className="btn"
                    onClick={ handleSave }
                ><i class="fa fa-spinner fa-spin fa-1x fa-fw"></i>
                    Save
                </button>
            </div>
        </div>
    )
}
