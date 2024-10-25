import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`
.container {
  padding: 16px;
  max-width: 1200px;
  margin: 0 auto;
}

.grid {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background-color: #FFF;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
}

.card .title {
  font-weight: bold;
  font-size: 1.2em;
  margin-bottom: 8px;
  text-align: center;
}

.card img {
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin-bottom: 8px;
}

body {
  background-color: #004481;
}
`;
