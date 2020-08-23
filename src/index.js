import React, { useState } from 'react'
import styles from './styles.module.css'
import { BsDot, BsThreeDotsVertical } from 'react-icons/bs'
import { FiMinimize2, FiMaximize2 } from 'react-icons/fi'

export const UploadProgress = ({ items }) => {
  const [detailsOpen, setDetailsOpen] = useState(false)

  const totalFileSize = () => {
    let total = 0
    items.map((item) => {
      total += parseInt(item.size)
    })
    return total
  }

  const totalLeft = () => {
    let seconds = []
    items.map((item) => {
      seconds.push(parseInt(item.secLeft))
    })
    return Math.max(...seconds)
  }

  const calculateTotalPercentage = () => {
    let totalDownloaded = 0
    if (items.length === 0) {
      return 0
    }
    items.map((file) => {
      totalDownloaded += (parseInt(file.size) * file.completedPercentage) / 100
    })
    return ((totalDownloaded / totalFileSize()) * 100).toFixed(0)
  }

  const renderList = () => {
    if (detailsOpen) {
      return items.map((item) => {
        return (
          <div className={styles.listItem}>
            <div className={styles.listItemLeft}>
              <div>{item.fileName}</div>
              <div className={styles.itemProgressBar}>
                <div
                  className={styles.itemProgressBarInner}
                  style={{ width: `${item.completedPercentage}%` }}
                ></div>
              </div>
            </div>
            <div className={styles.listItemRight}>
              <div>{item.completedPercentage}%</div>
              <BsDot />
              <div>{item.secLeft}s left</div>
            </div>
          </div>
        )
      })
    }
    return null
  }

  return (
    <div style={{ margin: '50px' }}>
      <div className={styles.container}>
        <div
          className={
            detailsOpen
              ? styles.mainBox + ' ' + styles.mainBoxList
              : styles.mainBox
          }
        >
          <div
            className={
              calculateTotalPercentage() == 100
                ? styles.mainProgress + ' ' + styles.mainProgressCompleted
                : styles.mainProgress
            }
            style={
              detailsOpen
                ? { width: '0' }
                : { width: `${calculateTotalPercentage()}%` }
            }
          ></div>
          <div
            className={styles.lineProgress}
            style={
              detailsOpen
                ? { width: '0' }
                : { width: `${calculateTotalPercentage()}%` }
            }
          ></div>
          <div className={styles.boxContent}>
            <div className={styles.contentLeft}>
              <div className={styles.uploadingHeader}>Uploading 2 Files</div>
              <div className={styles.uploadingDescription}>
                {calculateTotalPercentage()}% <BsDot /> {totalLeft()}s left
              </div>
            </div>
            <div className={styles.contenRight}>
              <div onClick={() => setDetailsOpen(!detailsOpen)}>
                {detailsOpen ? (
                  <FiMinimize2
                    size={'25px'}
                    color={'grey'}
                    className={styles.showMore}
                  />
                ) : (
                  <FiMaximize2
                    size={'25px'}
                    color={'grey'}
                    className={styles.showMore}
                  />
                )}
              </div>
              <div onClick={() => console.log('test')}>
                <BsThreeDotsVertical
                  size={'25px'}
                  color={'grey'}
                  className={styles.showOptions}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.fileList}>{renderList()}</div>
    </div>
  )
}
