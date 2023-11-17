# Modal Opener Component

A simple React Component that allows you to showcase any types of content in a modal or popup.

## Installation
Simply run the following command in your project terminal

```bash
$ npm i modal-opener-component
```

it will take a few seconds to install this package in your project.

## Import
To use the package in your Gutenberg development project, first import the component like this:-
```
import ModalOpenerComponent from 'modal-opener-component'
```
So, our component's name is **ModalOpenerComponent**
## Available Props

| Props             | Type             | Default
| ----------------- | -----------------| ------------
| buttonLabel | string | Open Modal
| btnStyle | object | None
| overlayStyle | object | None
| modalStyle | object | None
| onClose | func | None. Triger when the modal is closed
| onOpen | func | None. Triger when the modal is opened

## General Example
To use the component, use it like this:-
```
<ModalOpenerComponent>
      <h5>Modal Title</h5>
      <p>
        Modal description goes here. Great to see you, man. Are you okay with
        us?
      </p>
      <button>Learn More </button>
</ModalOpenerComponent>
```

Add all available props
```
<ModalOpenerComponent
    btnLabel="See Prices"
    btnStyle={{
        color: '#fff',
        backgroundColor: '#f00'
    }}
    modalStyle={{
        backgroundColor: '#f9f9f9'
    }}
    overlayStyle={{
        background: 'rgba(0,0,0,.5)'
    }}
    onOpen={()=> console.log('the modal wants to open')}
    onClose={() => console.log('the modal is closed')}
>
    <h5>Modal Title</h5>
    <p>
    Modal description goes here. Great to see you, man. Are you okay with
    us?
    </p>
    <button>Learn More </button>
</ModalOpenerComponent>
```

## License

[MIT](https://choosealicense.com/licenses/mit/)


## 🚀 About Me
I am Zakaria Binsaifullah, an expert in WordPress, Gutenberg & Shopify app development. [Our Website](https://gutenbergkits.com) related to Gutenberg Development.
