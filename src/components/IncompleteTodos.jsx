export const IncompleteTodos = (props) => {
    // props
    const {incompleteTodos, onClickComplete, onClickDelete} = props;
    console.log(incompleteTodos);

    // JSX
    return (
        <div className="incompleteArea">
        <p className="title">未完了のTODO</p>
        <ul>

            {/**
             * mapを使って繰り返し
             * Stateが中にあるので、過度な再レンダリング発生
             * =>keyを設定して過度な際レンダリングを抑制
             */}
            {incompleteTodos.map((todo, index)=>
            <li key={index} className="list-row">
                <div>
                    <p className="todo-item">{todo}</p>
                    <button onClick={()=>{onClickComplete(index)}}>完了</button>
                    <button onClick={()=>{onClickDelete(index)}}>削除</button>
                </div>
            </li>
            )}

        </ul>
    </div>  
    )
};