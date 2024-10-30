import { useState } from "react";
import "./style.css"
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";

export const Todo = () =>{
    /**
     * State
     */
    const [todoText, setTodoText] = useState("");// 入力欄のState（初期値："",現状変数：todoText, 更新関数：setTodoText）
    const [incompleteTodos, setIncompleteTodos] = useState(["TODOです1","TODOです2"]); 
    const [completeTodos, setCompleteTodos] = useState(["TODOでした1","TODOでした2"]); 


    /**
     * 条件
     */
    const incomleteTodosMaxLimit = incompleteTodos.length >=4;// 未完了のテキストが4以上


    /**
     * イベントハンドラ
     */
    // 入力画面：inputに入力される度に入力値を更新 / イベントハンドラ:input, State: todoText, 更新: setTodoText(event.target.value)
    const onChangeText = (event) => setTodoText(event.target.value);

    // 入力画面：button押したら、incompleteAreaにテキスト追加、Area内のtodo>=4の場合は不活性→外で定義 / イベントハンドラ：Button onClick, State：todoText, incompleteTodos, 更新：setIncompleteTodos(new)
    const onCLickAdd = () => {
        // 定義
        const newTodos = [...incompleteTodos, todoText];
        // イベント時の処理
        if(todoText === ""){return};
        setIncompleteTodos(newTodos);
        setTodoText("");
    };

    // 未完了画面：button押す→どのTodoか取得→そのテキストを取得→incompleteTodoから削除、completeTodoへ追加 / event: button onClick, State: incompleteTodos, completeTodos
    const onClickComplete = (index) => {
        // 定義
        const clickedTodo = incompleteTodos[index];// 選択されたテキスト
        //イベント処理(未完了から削除)
        const newIncompleteTodos = incompleteTodos.filter(item=>item!==clickedTodo);// item(incompleteTodosの中の配列たち)からclickedTodoのみ除外して配列をコピー
        setIncompleteTodos(newIncompleteTodos);
        // イベント処理（完了へ追加）
        const newCompleteTodos = [...completeTodos, clickedTodo];
        setCompleteTodos(newCompleteTodos);
    }

    // 削除画面：button押す→選んだリストを定義→filterで選んだリスト以外の配列をコピー→更新
    const onClickDelete = (index) => {
        // 定義（選んだリスト）
        const clickedTodo = incompleteTodos[index];
        // 処理（filterで選んだリスト以外の配列をコピー）
        const newIncompleteTodos = incompleteTodos.filter(item=>item!==clickedTodo);
        // 更新
        setIncompleteTodos(newIncompleteTodos);
    }

    // 完了画面：button押す→選んだリストを定義→filterでリスト以外の配列をコピー、incompleteTodosへ追加→更新
    const onClickBack = (index) => {
        // 定義（選んだリスト）
        const clickedTodo = completeTodos[index];
        // 処理（完了から削除）
        const newCompleteTodos = completeTodos.filter(item=>item!==clickedTodo);
        // 処置（未完了へ追加）
        const newIncompleteTodos = [...incompleteTodos, clickedTodo];
        // 更新
        setCompleteTodos(newCompleteTodos);
        setIncompleteTodos(newIncompleteTodos);
    }


    return (
        <>

        <InputTodo 
        maxLimit={incomleteTodosMaxLimit}
        todo={todoText}
        onChange={onChangeText}
        onClick={onCLickAdd}
        />

        <IncompleteTodos 
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
        />

 
        <div className="completeArea">
            <p className="title">完了のTODO</p>
            <ul>
                
                {completeTodos.map((todo, index)=>
                <li key={index} className="list-row">
                    <div>
                        <p className="todo-item">{todo}</p>
                        <button onClick={()=>{onClickBack(index)}}>戻す</button>
                    </div>
                </li>
                )}
                
            </ul>
        </div>
        </>
    );

};
