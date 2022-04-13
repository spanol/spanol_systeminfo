const Os = ({ data }) => {
    const {platform, distro, hostname, serial} = data;
    return (
        <div className="battery">
            <h1>Os info:</h1>
            <p>platform: {platform}</p>
            <p>distro: {distro}</p>
            <p>hostname: {hostname}</p>
            <p>Serial: {serial}</p>
        <h1>Os</h1>
        </div>
    )
    }
    
    export default Os;