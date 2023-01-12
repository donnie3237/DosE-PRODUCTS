import React from 'react'

function DosECRUD() {
  return (
    <div className='dl'>
        <div className="title flex">
            <h1 className='flex'>DosE-CRUD</h1>
        </div>
        <div className="flex">
            <img src={require('../img/crud.png')} alt="" />
        </div>
        <div className="download flex">
            <a href={require('../Products/DosE-CRUD.apk')} download='DosE-CRUD.apk' className="phone flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="20%" height="50%" fill="currentColor" viewBox="0 0 16 16">
                    <path d="m10.213 1.471.691-1.26c.046-.083.03-.147-.048-.192-.085-.038-.15-.019-.195.058l-.7 1.27A4.832 4.832 0 0 0 8.005.941c-.688 0-1.34.135-1.956.404l-.7-1.27C5.303 0 5.239-.018 5.154.02c-.078.046-.094.11-.049.193l.691 1.259a4.25 4.25 0 0 0-1.673 1.476A3.697 3.697 0 0 0 3.5 5.02h9c0-.75-.208-1.44-.623-2.072a4.266 4.266 0 0 0-1.664-1.476ZM6.22 3.303a.367.367 0 0 1-.267.11.35.35 0 0 1-.263-.11.366.366 0 0 1-.107-.264.37.37 0 0 1 .107-.265.351.351 0 0 1 .263-.11c.103 0 .193.037.267.11a.36.36 0 0 1 .112.265.36.36 0 0 1-.112.264Zm4.101 0a.351.351 0 0 1-.262.11.366.366 0 0 1-.268-.11.358.358 0 0 1-.112-.264c0-.103.037-.191.112-.265a.367.367 0 0 1 .268-.11c.104 0 .19.037.262.11a.367.367 0 0 1 .107.265c0 .102-.035.19-.107.264ZM3.5 11.77c0 .294.104.544.311.75.208.204.46.307.76.307h.758l.01 2.182c0 .276.097.51.292.703a.961.961 0 0 0 .7.288.973.973 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h1.343v2.182c0 .276.097.51.292.703a.972.972 0 0 0 .71.288.973.973 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h.76c.291 0 .54-.103.749-.308.207-.205.311-.455.311-.75V5.365h-9v6.404Zm10.495-6.587a.983.983 0 0 0-.702.278.91.91 0 0 0-.293.685v4.063c0 .271.098.501.293.69a.97.97 0 0 0 .702.284c.28 0 .517-.095.712-.284a.924.924 0 0 0 .293-.69V6.146a.91.91 0 0 0-.293-.685.995.995 0 0 0-.712-.278Zm-12.702.283a.985.985 0 0 1 .712-.283c.273 0 .507.094.702.283a.913.913 0 0 1 .293.68v4.063a.932.932 0 0 1-.288.69.97.97 0 0 1-.707.284.986.986 0 0 1-.712-.284.924.924 0 0 1-.293-.69V6.146c0-.264.098-.491.293-.68Z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20%" height="50%" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>
                </svg>
                <h1 className='flex'>Mobile</h1>
            </a>
            <a href={require('../Products/DosE-CRUD Setup 1.0.0.exe')} download='DosE-CRUD.exe' className="desk flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="15%" height="50%" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M6.555 1.375 0 2.237v5.45h6.555V1.375zM0 13.795l6.555.933V8.313H0v5.482zm7.278-5.4.026 6.378L16 16V8.395H7.278zM16 0 7.33 1.244v6.414H16V0z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="15%" height="50%" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="15%" height="50%" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M2.273 9.53a2.273 2.273 0 1 0 0-4.546 2.273 2.273 0 0 0 0 4.547Zm9.467-4.984a2.273 2.273 0 1 0 0-4.546 2.273 2.273 0 0 0 0 4.546ZM7.4 13.108a5.535 5.535 0 0 1-3.775-2.88 3.273 3.273 0 0 1-1.944.24 7.4 7.4 0 0 0 5.328 4.465c.53.113 1.072.169 1.614.166a3.253 3.253 0 0 1-.666-1.9 5.639 5.639 0 0 1-.557-.091Zm3.828 2.285a2.273 2.273 0 1 0 0-4.546 2.273 2.273 0 0 0 0 4.546Zm3.163-3.108a7.436 7.436 0 0 0 .373-8.726 3.276 3.276 0 0 1-1.278 1.498 5.573 5.573 0 0 1-.183 5.535 3.26 3.26 0 0 1 1.088 1.693ZM2.098 3.998a3.28 3.28 0 0 1 1.897.486 5.544 5.544 0 0 1 4.464-2.388c.037-.67.277-1.313.69-1.843a7.472 7.472 0 0 0-7.051 3.745Z"/>
                </svg>
                <h1 className='flex'>Desktop</h1>
            </a>
        </div>
        <div className="tuto">
            <h1 className='flex'>Mobile</h1>
            <div className="phone flex">
                <img src={require('../img/crud/p (3).jpg')} alt="" />
                <img src={require('../img/crud/p (4).jpg')} alt="" />
                <img src={require('../img/crud/p (2).jpg')} alt="" />
                <img src={require('../img/crud/p (1).jpg')} alt="" />
            </div>
            <h1 className='flex'>Desktop</h1>
            <div className="win flex">
                <div className="two flex">
                    <img src={require('../img/crud/dt1.png')} alt="" />
                    <img src={require('../img/crud/dt2.png')} alt="" />
                </div>
                <div className="two flex">
                    <img src={require('../img/crud/dt3.png')} alt="" />
                    <img src={require('../img/crud/dt3.png')} alt="" />
                </div>
            </div>
        </div>
        <div className="details flex">
            <div className="crop flex">
                <h1>What is DosE-CRUD ?</h1>
                <div className="hr"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse saepe ipsam explicabo. Consectetur commodi ut nostrum fugiat nesciunt CRUDero provident inventore veritatis sequi sit ab officia earum eligendi, saepe eveniet? Repellat quasi id accusantium saepe, optio quis minima ducimus unde sequi repellendus consequuntur adipisci corporis quas sapiente sint velit, tempore non, harum laboriosam? Optio soluta quibusdam obcaecati rem aliquam illum nobis consectetur, quae, recusandae laboriosam voluptatem expedita quo, totam repellat facere odio dolorum earum odit ratione suscipit. Eius facilis, iste magnam error iusto CRUDero nihil alias dolores? Consequuntur ipsum error magnam eveniet, ducimus numquam itaque at labore tenetur doloremque sapiente!</p>
            </div>
        </div>
        <div className="details2 flex">
            <div className="crop flex">
                <h1>Why i make DosE-CRUD ?</h1>
                <div className="hr"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse saepe ipsam explicabo. Consectetur commodi ut nostrum fugiat nesciunt CRUDero provident inventore veritatis sequi sit ab officia earum eligendi, saepe eveniet? Repellat quasi id accusantium saepe, optio quis minima ducimus unde sequi repellendus consequuntur adipisci corporis quas sapiente sint velit, tempore non, harum laboriosam? Optio soluta quibusdam obcaecati rem aliquam illum nobis consectetur, quae, recusandae laboriosam voluptatem expedita quo, totam repellat facere odio dolorum earum odit ratione suscipit. Eius facilis, iste magnam error iusto CRUDero nihil alias dolores? Consequuntur ipsum error magnam eveniet, ducimus numquam itaque at labore tenetur doloremque sapiente!</p>
            </div>
        </div>
        <div className="details flex">
            <div className="crop flex">
                <h1>The contents ?</h1>
                <div className="hr"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse saepe ipsam explicabo. Consectetur commodi ut nostrum fugiat nesciunt CRUDero provident inventore veritatis sequi sit ab officia earum eligendi, saepe eveniet? Repellat quasi id accusantium saepe, optio quis minima ducimus unde sequi repellendus consequuntur adipisci corporis quas sapiente sint velit, tempore non, harum laboriosam? Optio soluta quibusdam obcaecati rem aliquam illum nobis consectetur, quae, recusandae laboriosam voluptatem expedita quo, totam repellat facere odio dolorum earum odit ratione suscipit. Eius facilis, iste magnam error iusto CRUDero nihil alias dolores? Consequuntur ipsum error magnam eveniet, ducimus numquam itaque at labore tenetur doloremque sapiente!</p>
            </div>
        </div>
    </div>
  )
}

export default DosECRUD