import React from 'react';
import styled, { Box, keyframes, th } from '@xstyled/styled-components';
import {
  FaTwitter,
  FaFacebook,
  FaWhatsapp,
  FaLinkedinIn,
} from 'react-icons/fa';
import {
  TwitterShareButton,
  FacebookShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
} from 'react-share';

const InnerShare = styled.div`
  font-size: 18;

  button {
    line-height: 0;
    cursor: pointer;
    transition: base;
    color: lighter !important;
    height: 24;
    width: 24;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 100%;
      height: 100%;
    }

    &:hover {
      color: accent !important;
    }
  }

  > span {
    line-height: 2.5;
  }
`;

const neon = (p) => {
  const red = th.color('danger')(p);

  return keyframes`
    from {
      text-shadow: 0 0 10px ${red}, 0 0 20px ${red};
    }
  `;
};

const Neon = styled.div`
  animation: ${neon} 1.5s ease-in-out infinite alternate;
  color: danger;
`;

const Line = styled.div`
  margin: 0 2;
  flex: 1;
  border-bottom: 1px solid;
  border-bottom-color: light500;
`;

const locales = {
  share: `Share article`,
};

export function Share({ url, title }) {
  return (
    <InnerShare>
      <Box row mx={-2} mt={5} alignItems="center">
        <Box col="auto" px={2}>
          <Neon>❤</Neon>
        </Box>
        <Box col="auto" px={2}>
          {locales.share}
        </Box>
        <Box col px={2}>
          <Line />
        </Box>
        <Box col="auto" px={2}>
          <TwitterShareButton url={url} title={title} via="ThisIsAdityads">
            <FaTwitter />
          </TwitterShareButton>
        </Box>
        <Box col="auto" px={2}>
          <FacebookShareButton url={url} quote={title}>
            <FaFacebook />
          </FacebookShareButton>
        </Box>
        <Box col="auto" px={2}>
          <WhatsappShareButton url={url} title={title}>
            <FaWhatsapp />
          </WhatsappShareButton>
        </Box>
        <Box col="auto" px={2}>
          <LinkedinShareButton
            url={url}
            title={title}
            source="aditya-ds-1806.github.io"
          >
            <FaLinkedinIn />
          </LinkedinShareButton>
        </Box>
      </Box>
    </InnerShare>
  );
}
