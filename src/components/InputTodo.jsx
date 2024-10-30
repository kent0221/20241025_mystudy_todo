export const InputTodo = (props) => {
    // props定義
    const {maxLimit, todo, onChange, onClick} = props;

    return (
        <div className="inputArea">
        <input disabled={maxLimit} placeholder="TODOを入力" value={todo} onChange={onChange} />
        <button disabled={maxLimit} onClick={onClick} >追加</button>
    </div>
    )
};