import { IContentData } from '.';

const Content = (props: { domainName: string; data: IContentData }) => {
  const { domainName } = props;

  return <div>{domainName}</div>;
};

export default Content;
