import {useState} from 'react';
import {FiCheck} from 'react-icons/fi';
import Select from 'react-select'

export default function Home() {

    const [input, setInput]= useState('')

    const options = [
        { value: '1', label: 'Opção 1: Marketing' },
        { value: '2', label: 'Opção 2' },
        { value: '3', label: 'Opção 3' }
    ]
    
    const questionsData = [
        { id: 1, options: [ "Opção 1", "Opção 2", "Opção 3"]},
        { id: 2, options: [ "Opção 1", "Opção 2", "Opção 3"]},
        { id: 3, options: [ "Opção 1", "Opção 2", "Opção 3"]}
    ]

    function handleSearch(){
      if(input ===''){
        alert("Preencha o campo de votação.");

        return;
      } else if (input === '1') {
        alert("Você votou na opção 1");
        return;
      } else if (input === '2') {
        alert("Você votou na opção 2");
        return;
      } 
       else if (input === '3') {
      alert("Você votou na opção 3");
      return;
    }else {
        alert("Opção inválida");
        return;
      }
    }

  return (
    <div className="flex flex-col w-full items-center justify-center px-[35%] pb-[120px]">
        <h1 className="text-2xl font-bold mt-16">VOTAÇÃO</h1>

        <div className='w-[100%] mt-6'>
            {questionsData.map((question) => 
                <ul className='mt-12'>
                    <h1 className='text-2xl font-bold'>Question {question.id}</h1>

                    <div className="mt-6 w-[100%] flex flex-row items-center space-x-4">
                        {/* <input 
                            className='flex-1 p-2'
                            type="text"
                            placeholder="Assinale a opção desejada:"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        /> */}
                        <Select
                            className='w-[100%]' 
                            options={options}
                            defaultValue={input}
                            onChange={setInput}
                        />
                        <FiCheck className='hover:cursor-pointer' size={30} color="black" onClick={handleSearch}/>
                    </div>

                    <main className="mt-6 w-[100%]">
                        <h2 className='font-bold text-xl w-[100%]'>Options Description:</h2>
                        <div className='mt-4'>
                            <p>Opção 1: Marketing </p>
                            <p>Opção 2: Programação </p>
                            <p>Opção 3: Educação emocional </p>
                        </div>
                    </main>
                </ul>
            )}
        </div>
    </div>
  );
}