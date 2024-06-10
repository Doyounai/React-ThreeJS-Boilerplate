import { IContentData } from '.';

const Content = (props: { domainName: string; data?: IContentData }) => {
  const { domainName } = props;

  return (
    <div className="w-full bg-white rounded-3xl flex flex-col space-y-10 py-10 pop-in">
      {/* Header */}
      <div className="w-full flex flex-col px-15 space-y-3">
        <h1>Text</h1>
        <table className="ml-7 text-white border border-slate-500 border-separate">
          <tr>
            <th className="bg-slate-500">Tag</th>
            <th className="bg-slate-500">Result</th>
          </tr>
          <tr className="text-slate-700">
            <th>{'<h1></h1>'}</th>
            <th>
              <h1>Header1</h1>
            </th>
          </tr>
          <tr className="text-slate-700">
            <th>{'<h2></h2>'}</th>
            <th>
              <h2>Header2</h2>
            </th>
          </tr>
          <tr className="text-slate-700">
            <th>{'<p></p>'}</th>
            <th>
              <p>paragraph</p>
            </th>
          </tr>
        </table>
      </div>
      {/* Button */}
      <div className="w-full flex flex-col px-15 space-y-3">
        <h1>Button</h1>
        <table className="ml-7 text-white border border-slate-500 border-separate">
          <tr>
            <th className="bg-slate-500">Class</th>
            <th className="bg-slate-500">Result</th>
          </tr>
          <tr className="text-slate-700">
            <th>{'.button'}</th>
            <th>
              <button className="my-4 button">button</button>
            </th>
          </tr>
          <tr className="text-slate-700">
            <th>{'.button-submit'}</th>
            <th>
              <button className="my-4 button-submit">Submit</button>
            </th>
          </tr>
          <tr className="text-slate-700">
            <th>{'.button-cancel'}</th>
            <th>
              <button className="my-4 button-cancel">Cancel</button>
            </th>
          </tr>
          <tr className="text-slate-700">
            <th>{'.button-muted'}</th>
            <th>
              <button className="my-4 button-muted">Muted</button>
            </th>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Content;
