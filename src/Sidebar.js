import React from 'react'
import "./Sidebar.css"
import logo from "./images/logo1.png"
import SidebarOption from './SidebarOption';
import { useDataLayerValue } from './DataLayer';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';


const Sidebar = () => {

    const[{playlists} , dispatch] = useDataLayerValue();


    console.log(playlists);

  return (
    <div className='sidebar'>
    <img src={logo} alt="logo" className='sidebar__logo' />
    <SidebarOption Icon={HomeIcon} title="Home"/>
    <SidebarOption Icon={SearchIcon} title="Search"/>
    <SidebarOption Icon={LibraryMusicIcon} title="Your Library"/>
    <br />
    <strong className='sidebar__title'>PLAYLISTS</strong>
    <hr />

    {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name}/>
    ))}

    </div>
  )
}

export default Sidebar