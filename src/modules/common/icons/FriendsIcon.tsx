export const FriendsIcon = ({
  width = 30,
  height = 31,
  className = "",
}: {
  width?: number;
  height?: number;
  className?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8.25 9.73077C8.84095 9.73077 9.42611 9.61139 9.97208 9.37944C10.518 9.1475 11.0141 8.80753 11.432 8.37895C11.8498 7.95038 12.1813 7.44158 12.4075 6.88162C12.6336 6.32165 12.75 5.72149 12.75 5.11538C12.75 4.50928 12.6336 3.90912 12.4075 3.34915C12.1813 2.78919 11.8498 2.28039 11.432 1.85181C11.0141 1.42324 10.518 1.08327 9.97208 0.851325C9.42611 0.61938 8.84095 0.5 8.25 0.5C7.05653 0.5 5.91193 0.986263 5.06802 1.85181C4.22411 2.71737 3.75 3.89131 3.75 5.11538C3.75 6.33946 4.22411 7.5134 5.06802 8.37895C5.91193 9.24451 7.05653 9.73077 8.25 9.73077ZM21.75 9.73077C22.3409 9.73077 22.9261 9.61139 23.4721 9.37944C24.018 9.1475 24.5141 8.80753 24.932 8.37895C25.3498 7.95038 25.6813 7.44158 25.9075 6.88162C26.1336 6.32165 26.25 5.72149 26.25 5.11538C26.25 4.50928 26.1336 3.90912 25.9075 3.34915C25.6813 2.78919 25.3498 2.28039 24.932 1.85181C24.5141 1.42324 24.018 1.08327 23.4721 0.851325C22.9261 0.61938 22.3409 0.5 21.75 0.5C20.5565 0.5 19.4119 0.986263 18.568 1.85181C17.7241 2.71737 17.25 3.89131 17.25 5.11538C17.25 6.33946 17.7241 7.5134 18.568 8.37895C19.4119 9.24451 20.5565 9.73077 21.75 9.73077ZM0 13.92C0 13.5719 0.06685 13.2272 0.196733 12.9056C0.326617 12.584 0.51699 12.2918 0.756983 12.0456C0.996976 11.7995 1.28189 11.6042 1.59545 11.471C1.90902 11.3378 2.2451 11.2692 2.5845 11.2692H9.8025C9.27504 12.2043 8.99817 13.2659 9 14.3462C8.99899 15.2194 9.17964 16.0827 9.52987 16.8786C9.88011 17.6745 10.3919 18.3847 11.031 18.9615H9.3345C8.61994 18.9609 7.91776 19.1528 7.29821 19.518C6.67867 19.8831 6.1635 20.4088 5.80425 21.0423C3.38775 20.5562 1.91925 19.3477 1.06425 17.99C8.9407e-08 16.3 0 14.5538 0 14.2515V13.92ZM20.6655 18.9615C21.3801 18.9609 22.0822 19.1528 22.7018 19.518C23.3213 19.8831 23.8365 20.4088 24.1958 21.0423C26.6123 20.5562 28.0808 19.3477 28.9358 17.99C30 16.3 30 14.5538 30 14.2515V13.9208C30.0001 13.5726 29.9333 13.2278 29.8035 12.9061C29.6736 12.5844 29.4833 12.2921 29.2433 12.0459C29.0033 11.7997 28.7183 11.6043 28.4047 11.4711C28.0911 11.3378 27.755 11.2692 27.4155 11.2692H20.1975C20.725 12.2043 21.0018 13.2659 21 14.3462C21.001 15.2194 20.8204 16.0827 20.4701 16.8786C20.1199 17.6745 19.6081 18.3847 18.969 18.9615H20.6655ZM19.5 14.3462C19.5 15.5702 19.0259 16.7442 18.182 17.6097C17.3381 18.4753 16.1935 18.9615 15 18.9615C13.8065 18.9615 12.6619 18.4753 11.818 17.6097C10.9741 16.7442 10.5 15.5702 10.5 14.3462C10.5 13.1221 10.9741 11.9481 11.818 11.0826C12.6619 10.217 13.8065 9.73077 15 9.73077C16.1935 9.73077 17.3381 10.217 18.182 11.0826C19.0259 11.9481 19.5 13.1221 19.5 14.3462ZM6.75 23.1508C6.75 22.4477 7.02229 21.7735 7.50698 21.2764C7.99167 20.7793 8.64905 20.5 9.3345 20.5H20.6655C21.351 20.5 22.0083 20.7793 22.493 21.2764C22.9777 21.7735 23.25 22.4477 23.25 23.1508V23.4823C23.25 23.7854 23.25 25.5308 22.1858 27.2208C21.0735 28.9869 18.9247 30.5 15 30.5C11.0753 30.5 8.9265 28.9869 7.81425 27.2208C6.75 25.5308 6.75 23.7846 6.75 23.4823V23.1508Z"
        fill="#E2E4E2"
      />
    </svg>
  );
};
