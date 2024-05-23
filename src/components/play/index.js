import React, { useEffect, useState } from 'react'
import Grid from '../design';
export default function Play() {

    const newGame=[[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]];
    const [total,setTotal]=useState(0);
    const [matrix, setMatrix] = useState(newGame);
    const [player, setPlayer] = useState('player1');
    const sign = { player1: 1, player2: 0 };
    const [winner,SetWinner]=useState('none');

    useEffect(() => {
    
    const curWinner=checkWinner(matrix);
    SetWinner(curWinner);

    }, [matrix])

    const playerPlayed = (e) => {
        if(winner!='none' || total===9)return;
        const id = e.currentTarget.id;
        const row = id.at(0);
        const column = id.at(-1);
        if (matrix[row][column] !== -1) return;
        setTotal(total+1);
        const PlayerChance = player === 'player1' ? 'player2' : 'player1';
        const temp = [...matrix];
        temp[row][column] = sign[player];
        setPlayer(PlayerChance);
        setMatrix(temp);
    }


    const restart =()=>{
       setMatrix(newGame);
       setPlayer('player1');
       SetWinner('none');
       setTotal(0);
    }

    return <>
        <div className='d-flex justify-content-center align-items-center flex-column gap-3'>
            <Grid matrix={matrix} playerPlayed={playerPlayed} player={player} winner={winner} restartGame={restart} total={total} />
        </div>
    </>

}







function checkWinner(matrix)
{
    let temp='none';
    for(let i =0;i<matrix.length;++i)
       {
           let zeroR,oneR;
           zeroR=oneR=0;

           let zeroC,oneC;
           zeroC=oneC=0;
           for(let j=0;j<matrix.length;++j)
               {

                   if(matrix[i][j]==0)++zeroR;
                   else if(matrix[i][j]==1)++oneR;   

                   if(matrix[j][i]==0)++zeroC;
                   else if(matrix[j][i]==1)++oneC;
               }

               if(zeroR===3||zeroC===3)
                   {
                       temp='player2'
                       return temp;
                   }
               else if(oneC===3||oneR===3)
                   {
                       temp='player1';
                       return temp;
                   }

       }

       let z,o=0;
       z=0;

       for(let i=0;i<matrix.length;++i)
        { 
            if(matrix[i][i]==0)++z;
            else if (matrix[i][i]==1)++o;
        }

        if(z==3)return 'player2';
        else if(o==3)return 'player1';

        
       o=0;
       z=0;

       for(let i=2;i>=0;--i)
        { 
            if(matrix[2-i][i]==0)++z;
            else if (matrix[2-i][i]==1)++o;
        }

        if(z==3)return 'player2';
        else if(o==3)return 'player1';

       return temp;


}