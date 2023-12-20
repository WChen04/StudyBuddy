export function time_convert ({remainingTime}) {
    let hours = Math.floor(remainingTime / 3600);
    let minutes = Math.floor((remainingTime % 3600) / 60);
    let seconds = remainingTime % 60;
    let UpdatedTime =
        hours == 0
        ? minutes == 0
            ? seconds == 0
            ? `${seconds}`
            : `0${seconds}`
            : seconds <= 10
            ? `${minutes}:0${seconds}`
            : `${minutes}:${seconds}`
        : minutes < 10
        ? seconds < 10
            ? `${hours}:0${minutes}:0${seconds}`
            : `${hours}:0${minutes}:${seconds}`
        : `${hours}:${minutes}:${seconds}`;
    
    return UpdatedTime;
    

}




// const time_convert = ({ remainingTime }) => {
//     const hours = Math.floor(remainingTime / 3600);
//     const minutes = Math.floor((remainingTime % 3600) / 60);
//     const seconds = remainingTime % 60;
//     const UpdatedTime =
//       hours == 0
//         ? minutes == 0
//           ? seconds == 0
//             ? `${seconds}`
//             : `0${seconds}`
//           : seconds <= 10
//           ? `${minutes}:0${seconds}`
//           : `${minutes}:${seconds}`
//         : minutes < 10
//         ? seconds < 10
//           ? `${hours}:0${minutes}:0${seconds}`
//           : `${hours}:0${minutes}:${seconds}`
//         : `${hours}:${minutes}:${seconds}`;
  
//     return UpdatedTime;
//   };