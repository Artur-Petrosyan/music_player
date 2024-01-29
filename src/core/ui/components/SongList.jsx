import React , { useEffect } from 'react';
import styled from "styled-components";
import { addSongs } from "src/app/Providers/store/songSlice";
import { useDispatch , useSelector } from "react-redux";
import { songs } from "src/app/songs/songsData";
import SongRow from "./SongRow";
import playIcon from 'src/app/assets/icons/play.svg'
import moveIcon from 'src/app/assets/icons/move.svg'
import Icon from "./styled-components/Icon";

const StyledTable = styled.table`
    width: 100%;
    font-size: 24px;
    color: rgba(165, 151, 138, 19);

    & thead {
        background-color: rgba(221, 220, 222, 183);
        height: 50px;

    }

    & td {
        display: flex;
        justify-content: flex-start;
        height: inherit;
        padding: 10px;
        width: 19%;
        border-right: 1px white solid;
        gap: 20px;
    }
`
const SongList = () => {
    const dispatch = useDispatch()
    const songList = useSelector(( state ) => state.songs)

    useEffect(() => {
        dispatch(addSongs(songs))
    } , [songList , dispatch]);
    return (
        <StyledTable>

            <thead>
            <SongRow>
                <td></td>
                <td>Song Name</td>
                <td>Artist Name</td>
                <td>Track</td>
                <td></td>
            </SongRow>
            </thead>


            <tbody>
            {songList.map(song => {
                return (
                    <SongRow key={song.id}>
                        <td>
                            <Icon src={moveIcon}/>
                            <Icon src={playIcon}/>
                        </td>
                        <td>
                            {song.songName}
                        </td>
                        <td>
                            {song.artistName}
                        </td>
                        <td>
                            {song.id}
                        </td>
                        <td></td>
                    </SongRow>
                )
            })}
            </tbody>
        </StyledTable>
    )
        ;
};

export default SongList;