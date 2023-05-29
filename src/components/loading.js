import loading from '../images/loading.gif';

const Loading =() =>{
    return <div style={{position:'absolute',inset:'0'}}>
        <img src = {loading} alt='Loading...'  style={{position: "absolute",inset: "40%"}}/>
    </div>
}

export default Loading;